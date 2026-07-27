export enum Apps {
    gd4xbox = 'gd4xbox'
}

export interface AppAssets {
    name: string;
    description: string;
    descriptionExt: string;
    appIconPath: string;
    appPrivacyPolicyPath: string;
    appPrivacyPolicyTextPath: string;
    appTermsOfUsePath: string;
    appTermsOfUseTextPath: string;
    appVersion: string;
    platform: string;
}

export type AppAssetsConfig = {
    [k in Apps]: AppAssets
}

const assetConfig: AppAssetsConfig = {
    gd4xbox: {
        name: 'Google Drive For Xbox',
        description: 'An Xbox UWP application for browsing, viewing, and downloading media from Google Drive.',
        descriptionExt: `
        This application, built primarily for Xbox using the Universal Windows Platform, allows users to login securely to their Google Drive account, browse files in a directory structure, view/listen to content such as photos, videos, and audio in the app, and download certain types of content directly to the console.

        Built with security in mind, the application does not store any file data locally* and utilizes PKCE for user authentication to ensure that no application secrets are exposed.

        * - File metadata caching may occur to reduce loading time and decrease Drive API usage.
        `,
        appIconPath: '/assets/images/gd4xbox/gd4xbox_notext.png',
        appPrivacyPolicyPath: '/assets/documents/gd4xbox/privacy_policy.pdf',
        appTermsOfUsePath: '/assets/documents/gd4xbox/terms_of_use.pdf',
        appPrivacyPolicyTextPath: '/assets/documents/gd4xbox/privacy_policy.txt',
        appTermsOfUseTextPath: '/assets/documents/gd4xbox/terms_of_use.txt',
        appVersion: '1.0.0.0',
        platform: 'Xbox'
    }
};

export const GetAssetConfigFor = (app: Apps) => assetConfig[app];

export const GetAsset = (app: Apps, field: keyof AppAssets) => assetConfig[app]?.[field];