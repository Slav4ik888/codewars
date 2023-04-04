const fileInput = document.getElementById(`file`);
const fileList = document.querySelector(`.file-list`);
const fileSubmit = document.querySelector(`#file-submit`);

const FILE_LIMIT_SIZE_KB = 75;


fileInput.addEventListener(`change`, () => {
  console.log('fileInput.addEventListener');
  updateFileList();
});

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  let curFiles = fileInput.files;

  if(!(curFiles.length === 0))  {
    console.log('file loading');

    for(let i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement('li');
      
      const checkResult = checkFileSize(curFiles[i], FILE_LIMIT_SIZE_KB);

      if (checkResult) {
        listItem.textContent = 'File name: ' + curFiles[i].name + '; file size ' + returnFileSize(curFiles[i].size) + '.';
        fileList.appendChild(listItem);
      } else {
        listItem.textContent = 'ПРЕВЫШЕН ЛИМИТ: ' + FILE_LIMIT_SIZE_KB + 'Kb; File name: ' + curFiles[i].name + '; file size ' + returnFileSize(curFiles[i].size) + '.';
        fileList.appendChild(listItem);
      }
    }
  }
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}


function checkFileSize(file, limitKb) {
  const limit = limitKb * 1024;
  console.dir(file);
  console.log('files: ', file.name);

  if (file.size > limit) {
    console.log(`The selected file must not be larger than ${limitKb} kB`);
    return false;
  }
  console.log(`Файл допустимой длины...`);
  return true;
}


