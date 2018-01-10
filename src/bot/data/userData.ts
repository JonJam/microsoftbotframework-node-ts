import { IRecognizeContext, Session } from "botbuilder";

export function getColour(session: Session): string | undefined {
  return session.userData.colour;
}

export function setColour(session: Session, colour: string) {
  session.userData.colour = colour;
}

export function getFirstRun(context: IRecognizeContext): boolean | undefined {
  return context.userData.firstRun;
}

export function setFirstRun(session: Session, shown: boolean) {
  session.userData.firstRun = shown;
}
