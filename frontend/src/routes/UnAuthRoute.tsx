import { Route, Redirect } from 'react-router';
import {useAppSelector} from '../redux/hooks';

import {currentUser} from '../redux/userSlice';

function UnAuthRoute(props:any){
  const loggedInUser = useAppSelector(currentUser);

  const Child = props.childComponent;

  if(loggedInUser.id === ""){
    if (props.exact === true){
      return (
        <Route path = {props.path} exact>
          <Child/>
        </Route>
      )
    }
    else{
      return (
        <Route path = {props.path}>
          <Child/>
        </Route>
      )
    }
  }
  else{
    return <Redirect to = '/home' />
  }

}

export default UnAuthRoute;