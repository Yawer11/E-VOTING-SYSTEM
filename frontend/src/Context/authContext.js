import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [isVoterAuth, setIsVoterAuth] = useState(false);
  const [heroImage, setHeroImage] = useState(
    "https://i.postimg.cc/KvV2Ztxm/h3.jpg"
  );
  const [privateRoute, setPrivateRoute] = useState(false);
  const [isVotingStarted, setIsVotingStarted] = useState(false);

  const [title, setTitle] = useState(
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as"
  );

  const [voterDetail, setVoterDetail] = useState({});
  return (
    <AuthContext.Provider
      value={{
        isVoterAuth,
        setIsVoterAuth,
        isAdminAuth,
        setIsAdminAuth,
        privateRoute,
        setPrivateRoute,
        title,
        setTitle,
        heroImage,
        setHeroImage,
        voterDetail,
        setVoterDetail,
        isVotingStarted,
        setIsVotingStarted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
