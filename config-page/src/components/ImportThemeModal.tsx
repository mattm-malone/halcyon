import React, { useState } from 'react';
import { Modal, ModalOverlay, Dialog, Button, Heading } from 'react-aria-components';

interface ImportThemeModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onImport: (json: string) => { success: boolean; error?: string };
}

export const ImportThemeModal: React.FC<ImportThemeModalProps> = ({
    isOpen,
    onOpenChange,
    onImport,
}) => {
    const [jsonText, setJsonText] = useState('');
    const [error, setError] = useState('');

    const handleImport = () => {
        const result = onImport(jsonText);
        if (result.success) {
            setJsonText('');
            setError('');
            onOpenChange(false);
        } else {
            setError(result.error || 'Import failed');
        }
    };

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            setJsonText('');
            setError('');
        }
        onOpenChange(open);
    };

    return (
        <ModalOverlay
            isOpen={isOpen}
            onOpenChange={handleOpenChange}
            className="pebble-color-modal-overlay"
            isDismissable
        >
            <Modal className="pebble-color-modal pebble-import-modal">
                <Dialog className="pebble-color-dialog">
                    {({ close }) => (
                        <>
                            <div className="pebble-color-modal-header">
                                <Heading slot="title">Import Theme</Heading>
                                <Button className="pebble-color-modal-close" onPress={close}>
                                    ×
                                </Button>
                            </div>
                            <div className="pebble-import-content">
                                <textarea
                                    className="pebble-import-textarea"
                                    placeholder="Paste theme JSON here…"
                                    value={jsonText}
                                    onChange={(e) => {
                                        setJsonText(e.target.value);
                                        setError('');
                                    }}
                                    rows={8}
                                />
                                {error && <p className="pebble-import-error">{error}</p>}
                                <Button
                                    className="pebble-import-button"
                                    onPress={handleImport}
                                    isDisabled={!jsonText.trim()}
                                >
                                    Import
                                </Button>
                            </div>
                        </>
                    )}
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
