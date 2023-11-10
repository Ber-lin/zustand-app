import React from "react";

function FilePicker() {
  const handleFilePicker = async () => {
    if (window.showOpenFilePicker) {
      let [fileHandle] = await window.showOpenFilePicker();
      console.log("fileHandle", fileHandle);
      const file = await fileHandle.getFile();
      const content = await file.text();
      console.log("content", content);
      // return content
    }
  };
  const saveFile = async () => { 
    const options = { 
        types: [ 
            { 
            description: "Test files",
            accept: { 
                "text/plain": [".txt"], 
                },
            }, 
        ],
    }; 
    const handle = await window.showSaveFilePicker(options); 
    const writable = await handle.createWritable(); 
    await writable.write("Hello World"); 
    await writable.close(); 
    return handle; 
};

  return (
    <div>
      <button onClick={handleFilePicker}>chose file</button>
      <button onClick={saveFile}>save File</button>
    </div>
  );
}

export default FilePicker;
