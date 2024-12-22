export const privyConfig = {
    loginMethods: [
      "wallet",
      "email",
      "google",
      "twitter",
      "apple",
      "discord",
      "github",
    ],
    appearance: {
      theme: "#F9F9F9",
      loginMessage: 'Welcome To TradeCatalyst!', 
      appName: "TradeCatalyst",
      logo:"/assets/images/tradeCatalystLogo.svg",
    },
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
      noPromptOnSignature: true,
    },
};