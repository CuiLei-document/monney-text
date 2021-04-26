type RecordItem = {
    tags: string[]
    notes: string
    types: string
    amount: number
    createdAt: Date | undefined
}
type Tag = {
    id:string
    name:string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success'|'duplicated'
    update: (id:string, name:string) => 'success' | 'not found'|'duplicated'
    save: () => void
    remove: (id: string)=> boolean
}

interface Window{
    tagList: Tag[]
}