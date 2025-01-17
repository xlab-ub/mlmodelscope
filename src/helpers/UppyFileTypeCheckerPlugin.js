import Uppy from '@uppy/core';

import { audioToText, image_classification, image_enhancement, object_detection, semantic_segmentation } from './TaskIDs';

import fileTypeChecker from "file-type-checker";

export const getAllowedFileTypes = (task) => {
    switch (task) {
      case audioToText:
        return {
          fileTypes: ['aac', 'amr', 'flac', 'mp3', 'mp4', 'm4a', 'wav', 'webm'],
          mimeTypes: ['audio/*', 'video/*'],
        };
      case image_classification:
      case image_enhancement:
      case object_detection:
      case semantic_segmentation:
        return {
          fileTypes: ['bmp', 'gif', 'ico', 'jpeg', 'pdf', 'png', 'psd'],
          mimeTypes: ['image/*']
        };
      default:
        // Allow all file types? Or disallow all file types?
        return {
          fileTypes: ['*'],
          mimeTypes: '*/*'
        };
    }
}

export default class UppyFileTypeCheckerPlugin extends Uppy.Plugin {
	constructor(uppy, opts) {
		super(uppy, opts);

		this.id = opts.id || 'UppyFileTypeCheckerPlugin';
        // A type can be anything—some plugins use types to decide whether to do something to some other plugin.
		// https://uppy.io/docs/guides/building-plugins/
        this.type = 'upload-preprocessor';

        this.allowedFileTypes = opts.allowedFileTypes;

        this.confirmFileType = this.confirmFileType.bind(this);
	}

    confirmFileType = async (fileIDs) => {
        // Note: This will break if we ever allow multiple uploads
        const file = this.uppy.getFile(fileIDs[0]);
        const blob = new Blob([file.data]);
        const bufferResult = await blob.arrayBuffer();
        // Note: Doesn't seem like we need this additional check?
        // const fileCheckerResult = fileTypeChecker.detectFile(bufferResult)

        const validation = fileTypeChecker.validateFileType(bufferResult, this.allowedFileTypes);

        if (validation) {
            return Promise.resolve()
        } else {
            this.uppy.cancelAll();
            // Show error message to user
            this.uppy.info(`Something went wrong while adding "${file.data.name}". ` + 
            `Please check that the file extension is correct, or try a different file.`, 'error', 10000);  
            // Print error in the console
            return Promise.reject(new Error(`"${file.data.name}" failed validation by file-type-checker. ` + 
            `Confirm the extension is correct and that it is in the list of allowed file types.`));
        }      
    }    

	install() {
        this.uppy.addPreProcessor(this.confirmFileType);
	}

	uninstall() {
        this.uppy.removePreProcessor(this.confirmFileType);
	}    
}