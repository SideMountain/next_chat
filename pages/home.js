import Layout from '../components/Layout';
import UserList from '../components/UserList';
import TalkList from '../components/TalkList';
import userListStyle from '../static/UserListStyle';

import Home from '../components/Home';

export default () => (
    // <Layout header="{this.props.user_name}" title="home">
    //     {userListStyle}
    //     <div class="tabs">
    //         <input id="home" type="radio" name="tab_item" checked />
    //         <input id="talk" type="radio" name="tab_item" />
    //         <div class="tab_content" id="home_content">
    //             <div class="tab_content_description">
    //                 <p class="c-txtsp">
    //                     <UserList />
    //                 </p>
    //             </div>
    //         </div>
    //         <div class="tab_content" id="talk_content">
    //             <div class="tab_content_description">
    //                 <p class="c-txtsp">
    //                     <TalkList />
    //                 </p>
    //             </div>
    //         </div>
    //         <label class="tab_item tab_home" for="home">Home</label>
    //         <label class="tab_item tab_talk" for="talk">Talk</label>
    //     </div>
    // </Layout>
    <Home />
)