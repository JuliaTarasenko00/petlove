import { AuthLink } from '../ui/AuthLink';

interface IRender {
  mainPage: boolean;
  auth: boolean;
}

export const RenderAuthComponent = ({ mainPage, auth }: IRender) => {
  return (
    <>
      {auth && <p>User Data</p>}
      {!auth && <AuthLink mainPage={mainPage} />}
    </>
  );
};
