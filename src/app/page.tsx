"use client"

import { useState, useEffect } from "react"
import { FileBreadcrumb } from "~/components/breadcrumb"
import { FileList } from "~/components/file-list"
import { UploadButton } from "~/components/upload-button"
import { ThemeToggle } from "~/components/theme-toggle"
import { mockFiles, type File } from "~/lib/mock-data"

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null)
  const [currentFiles, setCurrentFiles] = useState<File[]>([])
  const [breadcrumbPath, setBreadcrumbPath] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    const files = mockFiles.filter((file) => file.parentId === currentFolder)
    setCurrentFiles(files)

    const newPath = []
    let parentId = currentFolder
    while (parentId) {
      const folder = mockFiles.find((file) => file.id === parentId)
      if (folder) {
        newPath.unshift({ id: folder.id, name: folder.name })
        parentId = folder.parentId
      } else {
        break
      }
    }
    setBreadcrumbPath(newPath)
  }, [currentFolder])

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId)
  }

  const handleBreadcrumbNavigate = (folderId: string | null) => {
    setCurrentFolder(folderId)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-normal text-gray-800 dark:text-gray-200">Google Drive Clone</h1>
        <ThemeToggle />
      </div>
      <div className="mb-4 flex justify-between items-center">
        <FileBreadcrumb path={breadcrumbPath} onNavigate={handleBreadcrumbNavigate} />
        <UploadButton />
      </div>
      <FileList files={currentFiles} onFolderClick={handleFolderClick} />
    </div>
  )
}

