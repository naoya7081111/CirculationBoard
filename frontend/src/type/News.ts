export type News  = {
    newsId: number;
    newsTitle: string;
    communityId: number;
    uesrId: number;
    postDate: Date;
    isImportant: boolean;
    newsContent: string;
    newsImage: File | null;
    newsUserName: string;
    newsUserImageName: string | null;
    isComplete: boolean;
}