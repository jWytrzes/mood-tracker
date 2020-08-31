import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../utils/redux';
import { db } from '../../../firebase';
import { endpoints } from '../../../utils/constants';
import MoodLabel from '../../atoms/MoodLabel/MoodLabel';
import { StyledWrapper, InnerWrapper, StyledUl } from './MoodChart-styles';

const MoodChart = () => {
	const { user } = useSelector(userSelector);
	const [chartData, setChartData] = useState(null);
	const [allMoods, setAllMoods] = useState(null);

	useEffect(() => {
		db.ref(endpoints.moods)
			.once('value')
			.then((snapshot) => {
				let moodsArr = [];
				Object.entries(snapshot.val()).map(([id, mood]) =>
					moodsArr.push({ id, ...mood }),
				);
				setAllMoods(moodsArr);
			});
	}, []);

	useEffect(() => {
		if (user && user.moodData && allMoods) {
			let moods = [];
			for (let key in user.moodData) {
				moods = [...moods, user.moodData[key].mood.replace(' ', '')];
			}
			const moodsCount = moods.length;
			moods = countOccurrences(moods);

			let finalData = [];
			for (let key in moods) {
				finalData = [
					...finalData,
					{
						title: key,
						value: Math.round((moods[key] / moodsCount) * 100 * 100) / 100,
						color: allMoods.find(
							(item) => item.name.toLowerCase().replace(' ', '') === key,
						).color,
					},
				];
			}
			setChartData(finalData);
		}
	}, [user, allMoods]);

	const countOccurrences = (arr) =>
		// eslint-disable-next-line no-sequences
		arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

	return (
		<StyledWrapper>
			{chartData && (
				<InnerWrapper>
					<PieChart
						data={chartData}
						label={({ dataEntry }) => `${dataEntry.value}%`}
						labelStyle={{ fill: '#fff', fontSize: '.7rem' }}
						labelPosition={70}
					/>
				</InnerWrapper>
			)}
			<StyledUl>
				{allMoods &&
					allMoods.map((item) => (
						<MoodLabel
							name={item.name}
							icon={item.icon}
							key={item.id}
							color={item.color}
						/>
					))}
			</StyledUl>
		</StyledWrapper>
	);
};

export default MoodChart;
