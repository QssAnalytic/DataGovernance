import{ FC } from 'react';
import { SaveModalProps } from '../../types';

const SaveModal: FC<SaveModalProps> = ({ isOpen, onClose, rowData, onSave, onChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                <h2 className="text-lg font-bold mb-4">Edit Row</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={rowData.name || ''}
                            onChange={(e) => onChange('name', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Application Source</label>
                        <input
                            type="text"
                            value={rowData.applicationSource || ''}
                            onChange={(e) => onChange('applicationSource', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Training Name</label>
                        <input
                            type="text"
                            value={rowData.trainingName || ''}
                            onChange={(e) => onChange('trainingName', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            value={rowData.phone || ''}
                            onChange={(e) => onChange('phone', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            value={rowData.date || ''}
                            onChange={(e) => onChange('date', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onSave}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SaveModal;
