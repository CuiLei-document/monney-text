const localStorageKeyName = 'recordList';
const recordListModel = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    clone(data: RecordItem[] | RecordItem) {
       return JSON.parse(JSON.stringify(data)) ;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};
export default recordListModel;