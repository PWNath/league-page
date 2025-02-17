import { get } from 'svelte/store';
import {leagueData} from '$lib/stores';

export const leagueID = "652695358043955200"; // your league ID
<<<<<<< HEAD
export const leagueName = "Players Club"; // your league name
=======
export const leagueName = "Player's Club"; // your league name
>>>>>>> 6a21f06e7b4a033e93b39f6732378f8b8ee81a93
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

export const getLeagueData = async (queryLeagueID = leagueID) => {
	if(get(leagueData)[queryLeagueID]) {
		return get(leagueData)[queryLeagueID];
	}
    const res = await fetch(`https://api.sleeper.app/v1/league/${queryLeagueID}`, {compress: true}).catch((err) => { console.error(err); });
	const data = await res.json().catch((err) => { console.error(err); });
	
	if (res.ok) {
		leagueData.update(ld => {ld[queryLeagueID] = data; return ld});
		return data;
	} else {
		throw new Error(data);
	}
}
