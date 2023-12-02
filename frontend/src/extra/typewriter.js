
// Creates a promise for typing sentence and waits for sentence to complete before resolving
const typeWriter = (config) => {
    const { l, index, text, fullText, type, setTextCallback } = config;

    return new Promise(resolve => {
      const innerTypeWriter = async (l, index, text, fullText, type) => {
        if (l === 0) {
            if (type === 3){
              await typeWriterReverse(text, 22, setTextCallback);
            }
            resolve();
            return;
        }
  
        text += fullText[index];
  
        if (setTextCallback) {
          setTextCallback(text, type);
        }
  
        setTimeout(() => {
          innerTypeWriter(l - 1, index + 1, text, fullText, type);
        }, 100);
      };
  
      innerTypeWriter(l, index, text, fullText, type);
    });
  };
  

// Creates a promise for deleting an amount of sentence and resolves after
const typeWriterReverse = (text, deleteAmount, setTextCallback) => {
    if (deleteAmount === 0) {
        return Promise.resolve(); 
    }

    let newText = text.slice(0, -1);

    if (setTextCallback) {
        setTextCallback(newText, 3); 
    }

    return new Promise(resolve => {
        setTimeout(() => {
        resolve(typeWriterReverse(newText, deleteAmount - 1, setTextCallback));
        }, 100);
    });
};
  

  export default typeWriter;