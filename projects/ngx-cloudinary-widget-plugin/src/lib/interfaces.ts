export interface IWidget {
    open: () => void;
}

export interface ICloudinary {
    createUploadWidget: (config: IOption, cb: (error, result) => void) => IWidget;
}

export interface IOption {
    cloudName?: string;
    uploadPreset?: string;
}
