import requests
from bs4 import BeautifulSoup

url = "https://livecounts.io/youtube-live-subscriber-counter/UCX6OQ3DkcsbYNE6H8uQQuVA"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    subscriber_count_element = soup.find('span', {'class': 'odometer-inside'})
    
    if subscriber_count_element:
        subscriber_count = subscriber_count_element.text.strip()
        print(f"Subscriber Count: {subscriber_count}")
    else:
        print("Subscriber count element not found.")
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
