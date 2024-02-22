import { ActivityIndicator, Text } from 'react-native';
import Tweet from '../../../../../components/Tweet';
import { useGlobalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getTweet } from '../../../../../lib/api/tweets';

export default function TweetScreen() {
    const { id } = useGlobalSearchParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['tweet', id],
        queryFn: () => getTweet(id as string)
    })

    // ** Below is where you need to find tweets through dummy data. No longer needed with function above pulling it from live data **
    // const tweet = tweets.find((t) => t.id == id);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>Tweet {id} not found!</Text>
    }

    return <Tweet tweet={data} />;
}