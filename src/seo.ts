export interface PageMetadata {
  title: string;
  description: string;
  path: string;
}

export const canonicalBase = (
  import.meta.env.VITE_SITE_URL || 'https://umerconvertoffice-code.github.io/recoverx-data-rescue'
).replace(/\/+$/, '');

export const pageMetadata: PageMetadata[] = [
  {
    title: 'RecoverX — Recover Your Lost Data',
    description: 'Practical data recovery guidance and private browser tools for files and backups you select.',
    path: '/'
  },
  {
    title: 'About RecoverX',
    description: 'Learn how RecoverX protects your privacy and explains realistic data recovery options.',
    path: '/about/'
  },
  {
    title: 'Photo Recovery & Image Repair',
    description: 'Check photo backups and re-encode images you select when your browser can still decode them.',
    path: '/photo-recovery/'
  },
  {
    title: 'Video Recovery & File Analysis',
    description: 'Inspect local video metadata and learn safe options for deleted video recovery.',
    path: '/video-recovery/'
  },
  {
    title: 'Free File Analysis Tools',
    description: 'Analyze selected local files, calculate SHA-256 fingerprints, and locate exact duplicates.',
    path: '/file-tools/'
  },
  {
    title: 'RecoverX Pricing',
    description: 'Compare RecoverX free tools with planned premium features.',
    path: '/pricing/'
  },
  {
    title: 'RecoverX Desktop App',
    description: 'Learn about the planned Windows data recovery application and its safety requirements.',
    path: '/desktop/'
  },
  {
    title: 'Data Recovery Resources',
    description: 'Official backup and recovery resources for Windows, macOS, Android, iPhone, and external drives.',
    path: '/resources/'
  },
  {
    title: 'RecoverX Account',
    description: 'Sign in to your RecoverX account using the configured secure authentication service.',
    path: '/account/'
  },
  {
    title: 'RecoverX Administration',
    description: 'Restricted RecoverX administration tools.',
    path: '/admin/'
  },
  {
    title: 'Find Duplicate Files',
    description: 'Compare files selected by you using local SHA-256 fingerprints.',
    path: '/duplicates/'
  }
];

export const metadataForPath = (path: string): PageMetadata => {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return pageMetadata.find((item) => item.path === normalizedPath) ?? {
    title: 'Page not found — RecoverX',
    description: 'The requested RecoverX page could not be found.',
    path: normalizedPath
  };
};
