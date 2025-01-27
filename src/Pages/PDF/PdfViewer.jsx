import React from 'react'
import { useParams } from 'react-router'

function PdfViewer() {
    const param = useParams();
    
  return (
    <>
    <div>
    {/* <div>{param.pdf}</div>
    <object style={{
      display:"block",
      margin:"auto"
    }} data={} type="application/pdf" width={"500px"} height={"650px"}></object> */}

    </div>
    </>
  )
}

export default PdfViewer