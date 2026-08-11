import { useState } from 'react'
import Navbar from './Navbar'

function Reports() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  function handleUpload() {
    if (selectedFile) {
      setUploadedFiles([...uploadedFiles, selectedFile.name])
      setSelectedFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Submit Reports
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-600"
          />

          <button
            onClick={handleUpload}
            className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Upload
          </button>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Uploaded Files
          </h2>

          <ul>
            {uploadedFiles.map((fileName, index) => (
              <li
                key={index}
                className="border-b py-2 text-gray-700 last:border-0"
              >
                {fileName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Reports