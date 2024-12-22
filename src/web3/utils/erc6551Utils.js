import { SOCIAL_ACCOUNT_FACTORY, TRADE_CATALYST_SALT } from "../../contracts/contractAddress.js";
import { socialAccountFactoryAbi } from "../../contracts/abis/SocialAccountFactory.js";

export const getNFTAccount = async(client, tokenContract, tokenId) => {
    
  try{

    const result = await client.readContract({
      address: SOCIAL_ACCOUNT_FACTORY,
      abi: socialAccountFactoryAbi,
      functionName: 'account',
      args: [TRADE_CATALYST_SALT, tokenContract, tokenId],
    });
    
    return result;
  } catch(error) {
    console.log('Error fetching social account details', error);
    throw error;
  }
}