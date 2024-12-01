import json

def parse_inputs() -> tuple[list, list]:
    with open('entries.json', 'r') as f:
        data = json.load(f)
    
    first_list = [i[0] for i in data]
    second_list = [i[1] for i in data]
    
    first_list.sort()
    second_list.sort()

    return first_list, second_list

def calculate_difference(data: tuple[list, list]) -> int:
    sum = 0

    for i in range(0, len(data[0])):
        sum += abs(data[0][i] - data[1][i])
    
    print("Total difference is: {}".format(sum))

if __name__ == '__main__':
    calculate_difference(parse_inputs())