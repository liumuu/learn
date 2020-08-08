const NAMESPACED = "myLoading";
const createLoadingPlugin = ({namespaced = NAMESPACED}={})=>{
    return store =>{
        if(store.state[namespaced]){
            throw new Error("createLoadingPlugin is exited");
        }
        store.registerModule(namespaced, {
            namespaced:true,
            state:{
                effect:{}
            },
            mutations:{
                show(state,payload){
                    state.effect = {
                       ...state.effect,
                       [payload]:true   
                    }
                },
                hide(state,payload){
                    state.effect = {
                        ...state.effect,
                        [payload]:false   
                     }    
                }
            }
          })
        store.subscribeAction({
            before: (action, state) => {
              console.log(`before action ${action.type}`)
              store.commit(namespaced+"/show",action.type)
            },
            after: (action, state) => {
              console.log(`after action ${action.type}`)
              store.commit(namespaced+"/hide",action.type)
            }
          })
    }
}
export default createLoadingPlugin;