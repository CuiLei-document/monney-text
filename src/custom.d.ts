type RecordItem = {
    tags: Tag[];
    notes: string;
    types: string;
    amount: number;
    createdAt?: string;
}
type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag: Tag | undefined;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    save: () => void;
    remove: (id: string) => boolean;
}

