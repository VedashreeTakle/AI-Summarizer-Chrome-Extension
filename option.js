document.addEventListener("DOMContentLoaded", ()=> {
    chrome.storage.sync.get(["geminiApiKey"], ({geminiApiKey})=> {
        if(geminiApiKey){
            document.getElementById("api-key").value = geminiApiKey;
        }
    });

    document.getElementById("save-btn").addEventListener("click",()=>{
        const apikey = document.getElementById("api-key").value.trim();

        if(!apikey){
            return 
        }

        chrome.storage.sync.set({geminiApiKey:apikey}, ()=> {
            document.getElementById("success-msg").style.display="block";

            setTimeout(()=>{
                window.close();
            },2000);
        })
    })
})