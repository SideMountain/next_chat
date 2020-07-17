import Layout from '../components/Layout';
import loginStyle from '../static/LoginStyle';
import Login from '../components/Login';

export default () => (
    <Layout header="Login" titile="Login Page.">
        {loginStyle}
        <Login />
    </Layout>
);