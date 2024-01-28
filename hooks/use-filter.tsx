import { create } from "zustand"

interface FilterStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useFilter = create<FilterStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useFilter