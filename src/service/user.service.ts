import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../model/user.model";

export async function CreateUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (e) {
    throw new Error("Error creating the User or duplicate key was generated.");
  }
}
