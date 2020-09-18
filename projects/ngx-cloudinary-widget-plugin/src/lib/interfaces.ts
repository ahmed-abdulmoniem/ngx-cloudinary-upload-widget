export interface IWidget {
    open: () => void;
    close: (obj: { quiet: boolean }) => void;
    update: (obj: IOption) => void;
    hide: () => void;
    show: () => void;
    minimize: () => void;
    isShowing: () => boolean;
    isMinimized: () => boolean;

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
    clientAllowedFormats?: string[];
    maxFileSize?: number;
    maxImageFileSize?: number;
    maxVideoFileSize?: number;
    maxRawFileSize?: number;
    maxImageWidth?: number;
    maxImageHeight?: number;
    preBatch?: (cb: (obj?: { cancel: boolean }) => void, data: any) => void;
    prepareUploadParams?: (cb: (obj?: { cancel: boolean }) => void, params: any) => void;
    getTags?: (cb: (obj?: { cancel: boolean }) => void, prefix: any) => void;
    getUploadPresets?: (cb: (presets?: string[]) => void) => void;
    [prop: string]: any;
}
