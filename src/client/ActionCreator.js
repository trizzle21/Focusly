//Action Creator

export default function actionCreator(type,...args){
	return function(...args){
		let action =  { type };
		argNames.forEach((arg, index) => {
      		action[argNames[index]] = args[index]
    	});
    	return action;

	}
}