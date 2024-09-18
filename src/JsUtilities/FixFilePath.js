
function FixFilePath(file){
    const newPath = "https://localhost:5000"
    const oldPath = "E:\\Uni\\Project\\Github Final Project\\University-Backend\\University_Project\\wwwroot"
    let path = file.replace(oldPath,newPath)
    return path
}

export default FixFilePath