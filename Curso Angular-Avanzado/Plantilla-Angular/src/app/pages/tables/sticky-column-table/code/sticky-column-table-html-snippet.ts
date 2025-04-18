export const STICKY_COLUMN_TABLE_HTML_SNIPPET = `  <div class="table-responsive example-container">
      <table mat-table [dataSource]="dataSource">
        <!-- Name Column -->
        <ng-container matColumnDef="assigned" sticky>
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Position Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget" class="f-w-600  f-s-14">
          <th mat-header-cell *matHeaderCellDef>Budget</th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <!-- Star Column -->
        <ng-container matColumnDef="star" stickyEnd>
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <mat-icon>more_vert</mat-icon>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
`;