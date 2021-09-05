export type CommunityListsSource = {
    userid: number;
    communityid: number;
    entrydate: Date;
    withdrawaldate: Date | null;
    id: number;
    communityname: string;
    imagename: string | null;
}
