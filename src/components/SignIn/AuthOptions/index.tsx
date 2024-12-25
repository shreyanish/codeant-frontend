import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { observer } from "mobx-react-lite";

import authOptions from "@/data/authoptions";
import authStore from "../../../../stores/authStore";

import "./styles.scss";
import codeantilu from "../../../../public/ilu.svg";
import PrimaryButton from "@/components/Buttons/Primary";

const AuthOptions = observer(() => {
  let [authType, setAuthType] = useState("SAAS");
  const router = useRouter();

  return (
    <div className="authoptions-parent">
      <div className="authoptions-header">
        <Image src={codeantilu} alt="" width={200} height={40}></Image>
        <p className="header-title">Welcome to CodeAnt AI</p>
        <div className="authoptions-typecontainer">
          {authType == "SAAS" ? (
            <PrimaryButton
              imageSource=""
              text={authType}
              onClick={() => setAuthType("SAAS")}
              size="lg"
            />
          ) : (
            <div
              className="authoptions-type"
              onClick={() => setAuthType("SAAS")}
            >
              SAAS
            </div>
          )}
          {authType == "Self Hosted" ? (
            <PrimaryButton
              imageSource=""
              text={authType}
              onClick={() => setAuthType("Self Hosted")}
              size="lg"
            />
          ) : (
            <div
              className="authoptions-type"
              onClick={() => setAuthType("Self Hosted")}
            >
              Self Hosted
            </div>
          )}
        </div>
      </div>
      <div className="authoptions-container">
        {authType == "SAAS"
          ? authOptions.saas.map((saas) => (
              <div
                key={saas.key}
                className="authoption"
                onClick={() => {
                  authStore.setSignedIn(true);
                  router.push(saas.link);
                }}
              >
                <Image src={saas.icon} alt="" width={24} height={24}></Image>
                <p>Sign in with {saas.name}</p>
              </div>
            ))
          : authOptions.selfHosted.map((selfHosted) => (
              <div
                key={selfHosted.key}
                className="authoption"
                onClick={() => router.push(selfHosted.link)}
              >
                <Image
                  src={selfHosted.icon}
                  alt=""
                  width={24}
                  height={24}
                ></Image>
                <p>Sign in with {selfHosted.name}</p>
              </div>
            ))}
      </div>
      <p className="authoptions-privacy">
        By signing up you agree to the <span>Privacy Policy</span>.
      </p>
    </div>
  );
});

export default AuthOptions;
