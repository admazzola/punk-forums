 
    //const ethJsUtil = require('ethereumjs-util')
  
    import web3utils from 'web3-utils'
    
    export default class ForumManager  {
    
        constructor(   ){
           
           
        }
 

 
        /*

        fromAddress: '0x99a848f6d8bb6d6cd1a524b3c99a97e41e1e4b5a',
        activePunkId: '3315',
        category: 'generaldiscussion',
        title: null,
        markdownInput: '# hello',
        signedAt: '1622325071059',
        accountSignature: '0xa2b47a19906c0249f3cba98e6ebe77f920e6065a86b4e62d5b92d8f398b1d46840aabe67f65a3da108b88f8fef4bb19afac1902838a0cdf9a73cc3a0d383adf21b'


        */


        static async createNewTopic( input , mongoInterface ){ 

            let topicHash = web3utils.randomHex(16)
     
            
            let newTopicData = {
                title: ForumManager.sanitizeInput(input.title),
                markdownInput: ForumManager.sanitizeInput(input.markdownInput),     //sanitize
                category: input.category,
                punkId: parseInt( input.activePunkId ),
                fromAddress: input.fromAddress.toLowerCase(),

                topicHash: topicHash


            }
            console.log('create new topic', newTopicData)


            let result = await mongoInterface.insertOne( 'topics', newTopicData  )


            return {success:true, topicHash: topicHash }


        }

        static async findTopicFromHash(topicHash, mongoInterface){

                
            return await mongoInterface.findOne('topics',{ topicHash: topicHash })
        }

///impl
        static sanitizeInput(input){

            return input 
        }
        

         
    }