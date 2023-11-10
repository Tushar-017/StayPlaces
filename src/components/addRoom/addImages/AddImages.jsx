import { Paper } from "@mui/material"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

const AddImages = () => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  })
  return (
    <Paper
      sx={{
        cursor: "pointer",
        background: "#fafafa",
        color: "#bdbdbd",
        border: "1px dashes #ccc",
        "&:hover": { border: "1px solid #ccc" },
      }}
    >
      <div style={{ padding: "16px" }} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p style={{ color: "green" }}>Drop the files here</p>
        ) : (
          <p>Drag 'n' Drop some files here, or click the select files</p>
        )}
        <em>(images with *.jpeg, *.png, *.jpg format will be accepted)</em>
      </div>
    </Paper>
  )
}

export default AddImages
