export interface IWidget {
    open: () => void;
}

export interface ICloudinary {
    createUploadWidget: (config: IOption, cb: (error, result) => void) => IWidget;
}

export interface IOption {
    cloudName: string;
    uploadPreset?: string;
    folder?: string;
    cropping?: boolean;
    uploadSignature?: any;
    sources?: string[];
    googleApiKey?: string;
    searchBySites?: string[];
    searchByRights?: boolean;
    dropboxAppKey?: string;
    facebookAppId?: string;
    instagramClientId?: string;
    showAdvancedOptions?: boolean;
    styles?: any;
    fonts?: any;
    text?: any;
    encryption?: any;
    language?: string;
    preBatch?: (cb: (obj?: { cancel: boolean }) => void, data: any) => void;
    prepareUploadParams?: (cb: (obj?: { cancel: boolean }) => void, params: any) => void;
    getTags?: (cb: (obj?: { cancel: boolean }) => void, prefix: any) => void;
    getUploadPresets?: (cb: (presets?: string[]) => void) => void;
}
