import reducers from './';

describe('reducers', () => {
  test('should initalize root state', () =>{
    const state = reducers(undefined, {});
    expect(state).toEqual({User:{name:'',messages:[],error:''}});
  });
  test('should set username with success', () => {
    const state = reducers({User:{name:'',messages:[],error:''}}, {type:'SET_USER',name:'hej'});
    expect(state).toEqual({User:{name:'hej',messages:[],error:''}});
  });
  test('should set error with failure', () => {
    const state = reducers({User:{name:'hej',messages:[],error:''}}, {type:'SET_ERROR',error:'Username already in use'});
    expect(state).toEqual({User:{name:'',messages:[],error:'Username already in use'}});
  });
  test('should remove error with succesfull login', () => {
    const state = reducers({User:{name:'',messages:[],error:'Username already in use'}}, {type:'SET_USER',name:'test'});
    expect(state).toEqual({User:{name:'test',messages:[],error:''}});
  });
  test('should add message to state', () => {
    const state = reducers({User:{name:'test',messages:[],error:''}}, {type:'ADD_MESSAGE',message:{user:'Server',text:'test welcome to the server'}});
    expect(state).toEqual({User:{name:'test',messages:[{user:'Server',text:'test welcome to the server'}],error:''}});
  });
  test('should add second message', () => {
    const state = reducers({User:{name:'test',messages:[{user:'Server',text:'test welcome to the server'}],error:''}}, {type:'ADD_MESSAGE',message:{user:'test',text:'het'}});
    expect(state).toEqual({User:{name:'test',messages:[{user:'Server',text:'test welcome to the server'},{user:'test',text:'het'}],error:''}});
  });
  test('should reset state', () => {
    const state = reducers({User:{name:'test',messages:[{user:'Server',text:'test welcome to the server'},{user:'test',text:'het'}],error:''}}, {type:'RESET'});
    expect(state).toEqual({User:{name:'',messages:[],error:''}});
  })
});