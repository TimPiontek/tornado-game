/**
 * Safe localStorage wrapper with error handling and validation
 * Prevents common issues with localStorage operations
 */

(function() {
    'use strict';
    
    const SafeStorage = {
        /**
         * Safely get an item from localStorage with error handling
         * @param {string} key - The key to retrieve
         * @param {*} defaultValue - Default value if key doesn't exist or parse fails
         * @returns {*} The parsed value or defaultValue
         */
        getItem(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                if (item === null) return defaultValue;
                return JSON.parse(item);
            } catch (error) {
                console.error(`Error reading localStorage key "${key}":`, error);
                // Try to clear corrupted data
                try {
                    localStorage.removeItem(key);
                } catch (e) {
                    console.error(`Error removing corrupted key "${key}":`, e);
                }
                return defaultValue;
            }
        },
        
        /**
         * Safely set an item in localStorage with error handling
         * @param {string} key - The key to set
         * @param {*} value - The value to store (will be JSON stringified)
         * @returns {boolean} True if successful, false otherwise
         */
        setItem(key, value) {
            try {
                const stringified = JSON.stringify(value);
                localStorage.setItem(key, stringified);
                return true;
            } catch (error) {
                console.error(`Error writing localStorage key "${key}":`, error);
                
                // Check if quota exceeded
                if (error.name === 'QuotaExceededError' || error.code === 22) {
                    console.warn('localStorage quota exceeded. Attempting cleanup...');
                    // Try to free up space by removing old data
                    this.cleanupOldData();
                    
                    // Try again after cleanup
                    try {
                        const stringified = JSON.stringify(value);
                        localStorage.setItem(key, stringified);
                        return true;
                    } catch (retryError) {
                        console.error(`Failed to save after cleanup:`, retryError);
                        return false;
                    }
                }
                
                return false;
            }
        },
        
        /**
         * Safely remove an item from localStorage
         * @param {string} key - The key to remove
         * @returns {boolean} True if successful, false otherwise
         */
        removeItem(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error(`Error removing localStorage key "${key}":`, error);
                return false;
            }
        },
        
        /**
         * Cleanup old data to free up space
         * Removes items older than 30 days that match certain patterns
         */
        cleanupOldData() {
            try {
                const now = Date.now();
                const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
                const keysToRemove = [];
                
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (!key) continue;
                    
                    // Remove old cache/temp data
                    if (key.includes('cache') || key.includes('temp') || key.includes('tmp')) {
                        try {
                            const item = localStorage.getItem(key);
                            if (item) {
                                const data = JSON.parse(item);
                                // If item has a timestamp and is old, mark for removal
                                if (data.timestamp && data.timestamp < thirtyDaysAgo) {
                                    keysToRemove.push(key);
                                }
                            }
                        } catch (e) {
                            // If we can't parse it, it might be corrupted - remove it
                            keysToRemove.push(key);
                        }
                    }
                }
                
                keysToRemove.forEach(key => {
                    try {
                        localStorage.removeItem(key);
                        console.log(`Cleaned up old data: ${key}`);
                    } catch (e) {
                        console.error(`Error removing key ${key}:`, e);
                    }
                });
                
                console.log(`Cleaned up ${keysToRemove.length} old items`);
            } catch (error) {
                console.error('Error during cleanup:', error);
            }
        },
        
        /**
         * Validate roster data structure
         * @param {object} roster - The roster object to validate
         * @returns {boolean} True if valid, false otherwise
         */
        validateRoster(roster) {
            if (!roster) return false;
            if (!roster.roster || !Array.isArray(roster.roster)) return false;
            if (!roster.id || typeof roster.id !== 'string') return false;
            if (!roster.name || typeof roster.name !== 'string') return false;
            
            // Validate each student has required fields
            for (const student of roster.roster) {
                if (!student.name || typeof student.name !== 'string') return false;
                if (typeof student.points !== 'number' || isNaN(student.points)) return false;
            }
            
            return true;
        },
        
        /**
         * Get storage usage info
         * @returns {object} Storage usage statistics
         */
        getStorageInfo() {
            let totalSize = 0;
            const keySizes = {};
            
            try {
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key) {
                        const value = localStorage.getItem(key);
                        const size = (value ? value.length : 0);
                        totalSize += size;
                        keySizes[key] = size;
                    }
                }
            } catch (error) {
                console.error('Error calculating storage info:', error);
            }
            
            return {
                totalSize,
                totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
                keyCount: localStorage.length,
                keySizes
            };
        }
    };
    
    // Export to window
    if (typeof window !== 'undefined') {
        window.SafeStorage = SafeStorage;
    }
    
    // Export to module system if available
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = SafeStorage;
    }
})();

