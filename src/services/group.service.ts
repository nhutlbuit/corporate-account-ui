let subGroups = ['Group A'];
let subGroupsAccountCount = [{groupName: 'Group A', accountCount: 2}];

export const createAGroupService = async (groupName: string) => {

    const createAGroup = (subGroupName: string) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                subGroups.push(subGroupName);
                return resolve(subGroups);
            }, 1000);
        });
    };

    return await createAGroup(groupName);
};

export const updateAGroupService = async (group: any) => {

    const getGroups = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                subGroups = subGroups.map(gName => {
                    if (gName === group.currentGroupName) {
                        return group.newGroupName;
                    }
                    return gName;
                });
                return resolve(subGroups);
            }, 1000);
        });
    };

    return await getGroups();
};

export const deleteAGroupService = async (groupName: string) => {

    const getGroups = (subGroupName: string) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                subGroups = subGroups.filter(e => e !== subGroupName);
                return resolve(subGroups);
            }, 1000);
        });
    };

    return await getGroups(groupName);
};

export const getGroupsService = async () => {

    const getGroups = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const subGroupsAccountCountTemp: any = [];
                subGroups.map(e => {
                    if (!groupExists(e, subGroupsAccountCountTemp)) {
                        subGroupsAccountCountTemp.push({groupName: e, accountCount: 1});
                    }
                });
                subGroupsAccountCount = subGroupsAccountCountTemp;
                return resolve(subGroupsAccountCount);
            }, 1000);
        });
    };

    return await getGroups();
};

function groupExists(groupName: string, listGroup: any[]) {
    return listGroup.some(el => el.groupName === groupName);
}





