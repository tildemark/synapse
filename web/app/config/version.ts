/**
 * Synapse Platform Release & Version Constants
 * Update this single file to change version numbering across all web application views,
 * download links, release targets, and protocol specs.
 */
export const SYNAPSE_VERSION = '1.1.1';
export const SYNAPSE_VERSION_TAG = `v${SYNAPSE_VERSION}`;

export const SYNAPSE_DOWNLOADS = {
  android: `https://github.com/tildemark/synapse/releases/latest/download/synapse_v${SYNAPSE_VERSION}_android.apk`,
  windows: `https://github.com/tildemark/synapse/releases/latest/download/synapse_v${SYNAPSE_VERSION}_windows_x64.zip`,
  releasesPage: 'https://github.com/tildemark/synapse/releases',
};
