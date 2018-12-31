print('Interest Calculator')
amount = float(input('Principal Amount: '))
# print(amount)
roi = float(input('Rate of interest: '))
years = int(input('Duration in number of years: '))
total = amount * pow(1+(roi/100), years)
# print(total)
interest = total - amount
print('\nInterest = %0.2f' % interest)
