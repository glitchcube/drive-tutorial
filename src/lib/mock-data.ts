export type FileType = "folder" | "document" | "image" | "video" | "audio"

export interface File {
  id: string
  name: string
  type: FileType
  size?: string
  modified: string
  parentId: string | null
}

export const mockFiles: File[] = [
  { id: "1", name: "Documents", type: "folder", modified: "2023-04-01", parentId: null },
  { id: "2", name: "Images", type: "folder", modified: "2023-04-02", parentId: null },
  { id: "3", name: "Videos", type: "folder", modified: "2023-04-03", parentId: null },
  { id: "4", name: "Report.docx", type: "document", size: "2.5 MB", modified: "2023-04-04", parentId: "1" },
  { id: "5", name: "Presentation.pptx", type: "document", size: "5.1 MB", modified: "2023-04-05", parentId: "1" },
  { id: "6", name: "Vacation.jpg", type: "image", size: "3.2 MB", modified: "2023-04-06", parentId: "2" },
  { id: "7", name: "Family.jpg", type: "image", size: "2.8 MB", modified: "2023-04-07", parentId: "2" },
  { id: "8", name: "Tutorial.mp4", type: "video", size: "15.7 MB", modified: "2023-04-08", parentId: "3" },
  { id: "9", name: "Project Files", type: "folder", modified: "2023-04-09", parentId: "1" },
  { id: "10", name: "Budget.xlsx", type: "document", size: "1.8 MB", modified: "2023-04-10", parentId: "9" },
]

