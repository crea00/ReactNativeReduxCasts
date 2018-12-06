export const selectLibrary = (libraryId) => {
  // actions are plain JavaScript Object
  return {
    type: 'select_library',
    payload: libraryId
  };
};