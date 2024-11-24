const fs=require('fs');
fs.readFile('./cor.txt',(err,data)=>{
    if (err)
    {
        console.log(err);
    }
   
    console.log(data.toString());
});
fs.writeFile('./cor.txt', "do you know what that Means",()=>
    {
        console.log('done');
    });
    fs.writeFile('./t.txt', "do you know what that Means",()=>
        {
            console.log('done');
        });
        
        //directory
        
if (!fs.existsSync('./assets')) {
            fs.mkdir('./assets', err => {
              if (err) {
                console.log(err);
              }
              console.log('folder created');
            });
          } else {
            fs.rmdir('./assets', err => {
              if (err) {
                console.log(err);
              }
              console.log('folder deleted');
            });
          }
          //delete a file
          if (fs.existsSync('./t.txt'))
          
            fs.unlink('./deleteit.txt',(err)=>{
                if (err)
                {
                    console.log(err);
                }
                console.log('deleted');
            });
          