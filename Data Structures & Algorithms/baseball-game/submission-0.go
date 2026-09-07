func calPoints(operations []string) int {
	st := make([]int, 0, len(operations))
	for _, op := range operations {
		if op == "D" {
			v := st[len(st)-1] * 2
			st = append(st, v)
		} else if op == "C" {
			st = st[:len(st)-1]
		} else if op == "+" {
			n := len(st)
			st = append(st, st[n-1] + st[n-2])
		} else {
			v, _ := strconv.Atoi(op)
			st = append(st, v)
		}
	}

	sum := 0
	for _, v := range st {
		sum = sum + v
	}
	
	return sum
}
