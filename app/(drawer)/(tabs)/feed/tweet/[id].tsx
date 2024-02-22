import { Text } from 'react-native';
import tweets from '../../../../../assets/data/tweets';
import Tweet from '../../../../../components/Tweet';
import { useGlobalSearchParams } from 'expo-router';

export default function TweetScreen() {
    const { id } = useGlobalSearchParams();

    const tweet = tweets.find((t) => t.id == id);

    if (!tweet) {
        return <Text>Tweet {id} not found!</Text>
    }

    return <Tweet tweet={tweet} />;
}